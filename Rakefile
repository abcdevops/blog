# encoding: utf-8

require 'rubygems'
require 'rake'
require 'fileutils'
require 'tempfile'
require 'rake/clean'
require 'scss_lint/rake_task'
require 'w3c_validators'
require 'nokogiri'
require 'rubocop/rake_task'
require 'English'
require 'net/http'
require 'html-proofer'

VERBOSE = false

raise "Invalid encoding \"#{Encoding.default_external}\"" unless Encoding.default_external.to_s == 'UTF-8'

task default: [
  :build,
  :pages,
  :garbage,
  :scss_lint,
  :spell,
  :regex,
  :excerpts,
  :snippets,
  :orphans,
  # :ping,
  # :jslint,
  # :proofer,
  # :rubocop,
]

def done(msg)
  puts msg + "\n\n"
end

def all_html()
  Dir['_site/**/*.html'].reject{ |f| f.end_with? '.amp.html' }
end

def all_links()
  all_html().reduce([]) do |array, f|
    array + Nokogiri::HTML(File.read(f)).xpath(
      '//article//a/@href'
    ).to_a.map(&:to_s)
  end.sort.map{ |a| a.gsub(/^\//, 'https://abcdevops.com/') }
end

desc 'Delete _site directory'
task :clean do
  rm_rf '_site'
  rm_rf 'uml'
  rm_rf '.sass-cache'
  rm_rf '.jekyll-metadata'
  rm_rf '_temp'
  rm_rf 'gnuplot'
  done 'Jekyll temporary files and directories deleted'
end

desc 'Lint SASS sources'
SCSSLint::RakeTask.new do |t|
  FileUtils.mkdir_p('_temp')
  paths = []
  Dir['css/**/*.scss'].each do |css|
    name = File.basename(css)
    f = File.open("_temp/#{name}", 'w')
    f << File.open(css).drop(2).join("\n")
    f.flush
    f.close
    paths << f.path
  end
  paths += Dir['_sass/**/*.scss']
  t.files = Dir.glob(paths)
end

desc 'Build Jekyll site'
task :build do
  if File.exist? '_site'
    done 'Jekyll site already exists in _site (run "rake clean" first)'
  else
    puts 'Building Jekyll site...'
    system('jekyll build --trace')
    fail "Jekyll failed with #{$CHILD_STATUS}" unless $CHILD_STATUS.success?
    done 'Jekyll site generated without issues'
  end
end

desc 'Check the existence of all critical pages'
task pages: [:build] do
  File.open('_rake/pages.txt').map(&:strip).each do |p|
    file = "_site/#{p}"
    fail "Page/directory #{file} is not found" unless File.exist?(file)
    puts "#{file}: OK" if VERBOSE
  end
  done 'All files are in place'
end

desc 'Check the absence of garbage'
task garbage: [:build] do
  File.open('_rake/garbage.txt').map(&:strip).each do |p|
    file = "_site/#{p}"
    fail "Page #{file} is still there" if File.exist? file
    puts "#{file}: absent, OK" if VERBOSE
  end
  ['_posts', 'static'].each do |p|
    garbage = Dir["#{p}/**/*"].reject{ |f| f.end_with?('.md') || !File.file?(f) }
    raise "Suspicious files in #{p}: #{garbage}" unless garbage.empty?
  end
  done 'There is no garbage'
end

desc 'Validate a few pages for W3C compliance'
# It doesn't work now, because of: https://github.com/alexdunae/w3c_validators/issues/16
task w3c: [:build] do
  include W3CValidators
  validator = MarkupValidator.new
  [
    'index.html',
    '2014/04/06/introduction.html'
  ].each do |p|
    file = "_site/#{p}"
    results = validator.validate_file(file)
    if results.errors.length > 0
      results.errors.each do |err|
        puts err.to_s
      end
      fail "Page #{file} is not W3C compliant"
    end
    puts "#{p}: OK" if VERBOSE
  end
  done 'HTML is W3C compliant'
end

desc 'Validate a few pages through HTML proofer'
task proofer: [:build] do
  HTMLProofer.check_directory(
    '_site',
    only_4xx: true,
    disable_external: true,
    log_level: :warn,
    validation: {
      report_invalid_tags: false,
      report_missing_names: true,
      report_script_embeds: true
    },
    parallel: {
      in_processes: 8
    },
    check_favicon: true,
    check_html: true,
    file_ignore: [
      '_site/2009/03/04/pdd.html',
      '_site/2017/05/02/unlimited-number-of-bugs.html'
    ]
  ).run
  done 'HTML passed through html-proofer'
end

desc 'Check spelling in all HTML pages'
task spell: [:build] do
  typos = all_html().reduce(0) do |total, f|
    html = Nokogiri::HTML(File.read(f))
    html.search('//code').remove
    html.search('//script').remove
    html.search('//pre').remove
    html.search('//div[@class="nospell"]').remove
    html.search('//header').remove
    html.search('//footer').remove
    tmp = Tempfile.new(['abcdevops-', '.txt'])
    text = html.xpath('//article//p|//article//h2|//article//h3').to_a.join(' ')
      .gsub(/[\n\r\t ]+/, ' ')
      .gsub(/&[a-z]+;/, ' ')
      .gsub(/&#[0-9]+;/, ' ')
      .gsub(/n[’']t/, ' not')
      .gsub(/[’']ll/, ' will')
      .gsub(/[’']ve/, ' have')
      .gsub(/[’']s/, ' ')
      .gsub(/[,:;<>?!-#$%^&@]+/, ' ')
    tmp << text
    tmp.flush
    tmp.close
    stdout = `cat "#{tmp.path}" \
      | aspell -a --lang=en_US -W 3 --ignore-case --encoding=utf-8 -p ./_rake/aspell.en.pws \
      | grep ^\\&`
    if stdout.empty?
      puts "#{f}: OK (#{text.split(' ').size} words)" if VERBOSE
    else
      puts "Typos in #{f}:"
      puts stdout
      puts text
      exit
    end
    total + stdout.split("\n").size
  end
  fail "#{typos.size} typo(s)" unless typos == 0
  done 'No spelling errors'
end

desc 'Ping all foreign links'
task ping: [:build] do
  links = all_links().uniq
    .reject{ |a| a.start_with? 'https://abcdevops.com/' }
    .reject{ |a| a.include? 'linkedin.com' }
    .reject{ |a| !(a =~ /^https?:\/\/.*/) }
  tmp = Tempfile.new(['abcdevops-', '.txt'])
  tmp << links.join("\n")
  tmp.flush
  tmp.close
  out = Tempfile.new(['abcdevops-', '.txt'])
  out.close
  puts "#{links.size} links found, testing them..."
  system("./_rake/ping.sh #{tmp.path} #{out.path}")
  errors = File.read(out).split("\n").reduce(0) do |cnt, p|
    code, link = p.split(' ')
    next if link.nil?
    if code != '200'
      puts "#{link}: #{code}"
      cnt + 1
    else
      cnt
    end
  end
  fail "#{errors} broken link(s)" unless errors < 20
  done "#{links.size} links are valid, #{errors} are broken"
end

desc 'Run RuboCop on all Ruby files'
RuboCop::RakeTask.new do |t|
  t.fail_on_error = true
  t.requires << 'rubocop-rspec'
end

desc 'Test all JavaScript files with JSLint'
task :jslint do
  Dir['js/**/*.js'].each do |f|
    stdout = `jslint #{f}`
    fail "jslint failed at #{f}:\n#{stdout}" unless $CHILD_STATUS.success?
  end
  done 'JSLint says JavaScript files are clean'
end

desc 'Make sure all pages have excerpts'
task :excerpts do
  Dir['_posts/**/*.md'].each do |f|
    fail "No excerpt in #{f}" unless File.read(f).include? '<!--more-->'
  end
  done 'All articles have excerpts'
end

desc 'Make sure there are no prohibited RegEx-es'
task :regex do
  ptns = [
    /("|&quot;)[,.?!]/,
    /\s&mdash;/,
    /&mdash;\s/
  ]
  errors = 0;
  all_html().each do |f|
    html = Nokogiri::HTML(File.read(f))
    html.search('//code').remove
    html.search('//script').remove
    html.search('//pre').remove
    text = html.xpath('//article//p').to_a.join(' ')
    ptns.each do |re|
      if re.match text
        puts "#{f}: #{re} found and it's prohibited"
        errors += 1
      end
    end
  end
  raise "#{errors} violations of RegEx prohibition" unless errors == 0
  done 'No prohibited regular expressions'
end

desc 'Make sure all snippets are compact enough'
task :snippets do
  all_html().each do |f|
    lines = Nokogiri::HTML(File.read(f)).xpath(
      '//article//figure[@class="highlight"]/pre/code[not(contains(@class,"text"))]'
    ).to_a.map(&:to_s)
      .join("\n")
      .gsub(/<code [^>]+>/, '')
      .gsub(/<span class="[A-Za-z0-9-]+">/, '')
      .gsub(/<a href="[^\"]+">/, '')
      .gsub(/<\/a>/, '')
      .gsub(/<\/code>/, "\n")
      .gsub(/<\/span>/, '')
      .gsub(/&lt;/, '<')
      .gsub(/&gt;/, '>')
      .split("\n")
    long = lines.reject{ |s| s.length < 81 }
    fail "Too wide snippet in #{f}: #{long}" unless long.empty?
    puts "#{f}: OK (#{lines.size} lines)" if VERBOSE
  end
  done 'All snippets are compact enough'
end

desc 'Make sure there are no orphan articles'
task orphans: [:build] do
  links = all_links()
    .reject{ |a| !a.start_with? 'https://abcdevops.com/' }
    .map{ |a| a.gsub(/#.*/, '') }
  links += all_html().map { |f| f.gsub(/_site/, 'https://abcdevops.com') }
  counts = {}
  links
    .reject{ |a| !a.match /.*\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\/.*/ }
    .reject{ |a| a.end_with? '.amp.html' }
    .reject{ |a| a.include? '2009/03/04/pdd' }
    .reject{ |a| a.include? '2017/05/02/unl' }
    .group_by(&:itself)
    .each { |k,v| counts[k] = v.length }
  orphans = 0
  counts.each do |k,v|
    if v < 4
      puts "#{k} is an orphan (#{v})"
      orphans += 1
    else
      puts "#{k}: #{v}"
    end
  end
  fail "There are #{orphans} orphans" unless orphans == 0
  done "There are no orphans in #{links.size} links"
end
