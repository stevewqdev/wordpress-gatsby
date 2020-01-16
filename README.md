<p align="center"><a href="https://www.gatsbyjs.org"> <img src="https://www.gatsbyjs.org/monogram.svg" alt="Gatsby" width="60" /> </a></p>
<h1 align="center">Gatsby's + Wordpress Boilerplate + ACF</h1>
<hr />
<h2>Supported features</h2>
<ul>
<li>ACF support</li>
<li>Import SVG as components using the NPM Package <strong>gatsby-plugin-react-svg</strong></li>
<li>Add Google Fonts using the gatsby-node.js using the NPM Package <strong>gatsby-plugin-prefetch-google-fonts</strong></li>
<li>Integration with Contact Form 7 plugin (Explained below)</li>
<li>Integration with Google reCAPTCH v2</li>
</ul>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<p>This is a starter boilertplate powered by the Wordpress API and the blazing fast static site generator Gatsby. Also will let you use the awesome plugin ACF</p>
<p>The next documentation will show you how to set up a Wordpress instalation as a headless <strong>CMS</strong> using Gatsby integrated with Netlify to render the frontend of the page and how you can setup and use Netlify Hooks to re-deploy your website whenever you want.</p>
<p><strong><em>Importan: theres a way to deploy using the netlify hooks everytime you save or update a new post, but right now thats not the one used here, this one let's you do a full deploy after you finish all your changes and updates.</em></strong></p>
<p><strong>It might seem like a lot of steps, but all the setup its actually pretty&nbsp;straightforward </strong></p>
<h2>Let's begin</h2>
<ol>
<li>Fork&nbsp;the current&nbsp;repository</li>
<li>Clone your forked repository</li>
<li><code>npm install --global gatsby-cli</code>&nbsp;(if you don't have Gatsby CLI installed)</li>
<li>In the root of your project&nbsp;do <code>npm install</code></li>
<li>Open the&nbsp;<code>.env.development and .env.production</code>&nbsp;file and change the variables&nbsp;GATSBY_WP_API_LINK and&nbsp;GATSBY_WP_API_URL with the url's that you are going to use on your project</li>
<li>Run&nbsp;<code>npm develop</code>&nbsp;-- <em>this command will run your Gatsby installation on your local enviroment</em></li>
</ol>
<p><em><strong>Important:</strong> Notice that there are two .env files, one its for you to use on your local development and the other its for the production environment, to make it work with netlify you must upload the envs file to your repository so <strong>BE SURE TO DON'T ADD ANY SENSITIVE INFORMATION ON THE .ENV FILES.&nbsp;</strong></em></p>
<p>Also, in case you wonder, we are using the <a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noopener">NPM dotenv package</a> to manage the .env variables within the whole Gatsby installation.</p>
<h2>Install Wordpress<span style="font-size: 14px;">&nbsp;</span></h2>
<p>Download and install the latest wordpress version on the server that you prefer. On our current demo site we are using a stripped down template for wordpress that it will only render blank on the wordpress url.</p>
<h2>Set up the Wordpress Installation</h2>
<p><strong>Dependencies</strong></p>
<p>You need to download and install the next plugins&nbsp;</p>
<ul>
<li>Advanced Custom Fields (<a href="https://wordpress.org/plugins/acf-extended/" target="_blank" rel="noopener">ACF</a>)</li>
<li>Access ACF fields using the WP API - <a href="https://wordpress.org/plugins/acf-to-rest-api/" target="_blank" rel="noopener">ACF to REST API</a></li>
<li><a href="https://wordpress.org/plugins/webhook-netlify-deploy/" target="_blank" rel="noopener">Deploy Webhook Button</a></li>
<li>Access to wp menu data using the WP API - <a href="https://wordpress.org/plugins/wp-rest-api-v2-menus/" target="_blank" rel="noopener">WP REST API Menus</a></li>
</ul>
<p>After installing the ACF to REST API plugin and activate it, go to settings -&gt; permalink -&gt; Scroll down to the section&nbsp;ACF to REST API and on the&nbsp;<strong>Request Version&nbsp;</strong>select V2</p>
<h2>Netlify</h2>
<p><em>Signup for a Netlify account if you don't already have one.</em></p>
<ol>
<li>Create a new site</li>
<li>Select "GitHub" from "Continuous Deployment"</li>
<li>Search and select your repository</li>
</ol>
<h2>Set up the Wordpress + Netlify Hook Plugin</h2>
<p>For this you can rely on the official documentation of the plugin that you can find in <a href="https://github.com/lukethacoder/wp-webhook-netlify-deploy" target="_blank" rel="noopener">here</a></p>
<p><strong>Note</strong>: Don't worry there are just a few of easy steps!</p>
<h2>And thats all!</h2>
<p>You should now be able to serve data from your Wordpress backend into your Gatsby aplication.</p>
<p>&nbsp;</p>
<hr />
<p>&nbsp;</p>
<h2>Some things you need to know!</h2>
<p><strong>1#</strong> - Master queries for the files <strong>Template</strong> &gt; Posts.js &amp; <strong>Template</strong> &gt; Page.js are writted on the file <strong>queries</strong> &gt; querieAll.js , these queries are being used on the gatsby-node.js to auto-generate the wordpress pages and posts. In the gatsby-node.js you can check the loop trought the querie results, and here you can add conditions to change stuff like render different templates for posts or default pages based on some field.</p>
<p><strong>2# -&nbsp;</strong>The queries on the&nbsp;<strong>Template</strong> &gt; Posts.js &amp; <strong>Template</strong> &gt; Page.js are only retrieving the id from the gatsby-node.js and then querying the current post data.</p>
<p><strong>3#</strong> - Be sure to update all ACF fields on the Graphql queries, Graphql will only retrieve explicit fields that already exist, so you have to create the ACF field group and then add them into you queries on the Gatsby files.&nbsp;</p>
<p><strong>4#</strong> - If you are going to use a group of fields set for all posts or all pages, you will need to create a dummy post that contains all of these fields, if you don't do that and theres at least one field that it's not being used on wordpress but it's added on your query Graphql will scream at you with a huge exception.</p>
<p><strong>5#</strong> - On the Gatsby structure there are two folders that will render your Pages, one its the folder Pages (duh!), in this folder every .js file you create there will be automatically converted into a page you can access using the file name as the pathname, <strong>example</strong>:&nbsp; your file&nbsp;<strong>Pages</strong>&gt;my-home.js will be rendered if you hit the url "yourpage.com/my-home". All the other pages that does not have an specific file on the <strong>Pages</strong> folder are going to be&nbsp;automatically rendered by the main template file <strong>Pages.js</strong> on the folder <strong>Templates.</strong></p>
<p><strong>6#&nbsp;</strong>Feel free to remove the next files, because they are only there as example pages</p>
<ul>
<li><strong>Pages &gt; async-call.js</strong></li>
<li><strong>Pages &gt; async-form.js</strong></li>
<li><strong>Pages &gt; form-post.js</strong></li>
<li><strong>Pages &gt; css &gt; examples.css</strong></li>
</ul>
<p>&nbsp;<strong>7#&nbsp;</strong>Custom css for the master template its now being added on the folder <strong>Layouts &gt; custom.css</strong></p>
<h2>Contact form 7 integration + Google Recaptcha</h2>
<p><span style="font-size: 14px;">The integration with this plugin its really easy, i will not add a step by step guide because its really simple, i will just give you an overview</span></p>
<ul>
<li><span style="font-size: 14px;"><strong>1#</strong> - You need to install and activate <strong>Contact Form 7</strong> plugin&nbsp;</span></li>
<li><span style="font-size: 14px;"><strong>2#</strong> - Follow this guide to know hos to access the&nbsp;<a href="gatsby.raxo.dev/wp-admin" target="_blank" rel="noopener"><strong>Contact Form 7</strong> API</a></span></li>
<li><span style="font-size: 14px;"><strong>3#</strong> - Then you can use <a href="https://malcoded.com/posts/react-http-requests-axios/" target="_blank" rel="noopener">this guide</a> to know how to send the post request to your form using axios</span></li>
<li><span style="font-size: 14px;"><strong>4#</strong> - And for the last part, <a href="https://github.com/sarneeh/reaptcha" target="_blank" rel="noopener">use this package</a> to add the Google Recaptcha into your forms</span></li>
</ul>
<p><strong>Note:&nbsp;</strong>You can install a plugin for <strong>Contact Form 7</strong> to save the submissions of your form in your wordpress installation and not just receiving them in your email.</p>
<h2>Next Features to add into the project</h2>
<ul>
<li><span style="font-size: 14px;">Mailchimp integration</span></li>
<li>Create a version of this project with woocommerce integration</li>
</ul>