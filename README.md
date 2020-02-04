<p align="center"><a href="https://www.gatsbyjs.org"> <img src="https://www.gatsbyjs.org/monogram.svg" alt="Gatsby" width="60" /> </a></p>
<h1 align="center">Gatsby's + Wordpress</h1>
<h1 align="center">Starter Project</h1>
<p>&nbsp;</p>
<h2>Supported features</h2>
<ul>
<li>ACF support</li>
<li><a href="https://www.gatsbyjs.org/packages/gatsby-plugin-react-svg/" target="_blank" rel="noopener">Import SVG as components</a>&nbsp;</li>
<li><a href="https://www.gatsbyjs.org/packages/gatsby-plugin-prefetch-google-fonts/">Google Fonts Prefecth Support</a></li>
<li>Integration with Contact Form 7 plugin <strong>(Explained below)</strong></li>
<li>Integration with Google reCAPTCHA v2&nbsp;<strong>(Explained below)</strong></li>
<li>Access Yoast SEO data trought graphql&nbsp;<strong>(Explained below)</strong></li>
<li>Mailchimp Gatsby Integration&nbsp;<strong>(Explained below)</strong></li>
</ul>
<h2><a href="https://eager-albattani-669cc8.netlify.com/" target="_blank" rel="noopener">Demo Site</a></h2>
<p>If you want to check the example files from the demo site you can access the demo site <a href="https://github.com/stevewqdev/wordpress-gatsby/tree/demo_site_branch" target="_blank" rel="noopener">repositorie</a></p>
<p>At the bottom you can read how to get the Wordpress custom logo and favicon from customization menu.&nbsp;</p>
<hr />
<p><strong>Important: To use Gatsby + React you should at least have a good background on javascript because it can get a little confusing.</strong></p>
<p>This is a starter boilertplate powered by the Wordpress API and the blazing fast static site generator Gatsby. Also will let you use the awesome plugin ACF</p>
<p>The next documentation will show you how to set up a Wordpress instalation as a headless <strong>CMS</strong> using Gatsby integrated with Netlify to render the frontend of the page and how you can setup and use Netlify Hooks to re-deploy your website whenever you want.</p>
<p><strong><em>There is a way to deploy using the netlify hooks everytime you save or update a new post, page etc., but right now thats not the one used here. This one let's you do a full deploy after you finish all your changes and updates so you can have control of each deploy.</em></strong></p>
<p><strong>Don't be scared, there seem to be a lot of steps but they are all really easy.&nbsp;</strong></p>
<h2>Let's begin</h2>
<ol>
<li>Fork&nbsp;the current&nbsp;repository</li>
<li>Clone your forked repository</li>
<li><code>npm install --global gatsby-cli</code>&nbsp;(if you don't have Gatsby CLI installed)</li>
<li>In the root of your project&nbsp;do <code>npm install</code></li>
<li>Open the&nbsp;<code>.env.development and .env.production</code>&nbsp;file and change the variables&nbsp;GATSBY_WP_API_LINK and&nbsp;GATSBY_WP_API_URL with the url's that you are going to use on your project</li>
<li>Run&nbsp;<code>npm develop</code>&nbsp;-- <em>this command will run your Gatsby installation on your local enviroment</em></li>
</ol>
<p><em><strong>Important:</strong>&nbsp;Don't upload the .env files to your repositorie, you can use <a href="https://docs.netlify.com/configure-builds/environment-variables/" target="_blank" rel="noopener">Netlify Build Environment Variables</a>&nbsp;if you are going to do the deploy there, for other deployment websites you need to check their variable documentation.</em></p>
<p>Also, in case you wonder, we are using the <a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noopener">NPM dotenv package</a> to manage the .env variables within the whole Gatsby installation.</p>
<h2>Install Wordpress<span style="font-size: 14px;">&nbsp;</span></h2>
<p>Download and install the latest wordpress version on the server that you prefer. You can use whatever template you want on your wordpress installation, but we recommend you to find a stripped down wordpress template tha will only render blank.&nbsp;</p>
<h2>Set up the Wordpress Installation</h2>
<p><strong>Dependencies</strong></p>
<p>You need to download and install the next plugins&nbsp;</p>
<ul>
<li>Advanced Custom Fields (<a href="https://wordpress.org/plugins/acf-extended/" target="_blank" rel="noopener">ACF</a>)</li>
<li>Access ACF fields using the WP API - <a href="https://wordpress.org/plugins/acf-to-rest-api/" target="_blank" rel="noopener">ACF to REST API</a></li>
<li><a href="https://wordpress.org/plugins/webhook-netlify-deploy/" target="_blank" rel="noopener">Deploy Webhook Button</a></li>
<li>Access to wp menu data using the WP API - <a href="https://wordpress.org/plugins/wp-rest-api-v2-menus/" target="_blank" rel="noopener">WP REST API Menus</a></li>
</ul>
<p>If you want to access the Yoast Seo data trought Graphql you need to download and install this next two plugins. Once you do that you will be able to access Yoast data for each page or post trought graphql</p>
<ul>
<li><a href="https://yoast.com/wordpress/plugins/seo/#utm_source=wordpress.org&amp;utm_medium=referral&amp;utm_term=yoast-seo&amp;utm_content=details&amp;utm_campaign=wordpress-org-ad" target="_blank" rel="noopener">Yoast SEO</a></li>
<li><a href="https://github.com/niels-garve/yoast-to-rest-api" target="_blank" rel="noopener">Yoast to REST API</a></li>
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
<p><strong>Note</strong>: Don't worry there are just a few easy steps!</p>
<h2>And thats all!</h2>
<p>You should now be able to serve data from your Wordpress backend into your Gatsby aplication.</p>
<hr />
<h2>Some things you need to know!</h2>
<p><strong>1#</strong> - Master queries for the files <strong>Template</strong> &gt; Posts.js &amp; <strong>Template</strong> &gt; Page.js are writted on the file <strong>queries</strong> &gt; querieAll.js , these queries are being used on the gatsby-node.js to auto-generate the wordpress pages and posts. In the gatsby-node.js you can check the loop trought the querie results, and here you can add conditions to change stuff like render different templates for posts or default pages based on some field.&nbsp;<strong>Please, go trought the file and try to understand it before doing anything else.</strong></p>
<p><strong>2# -&nbsp;</strong>The queries on the&nbsp;<strong>Template</strong> &gt; Posts.js &amp; <strong>Template</strong> &gt; Page.js are only retrieving the id from the gatsby-node.js and then querying the current post data.</p>
<p><strong>3#</strong> - Be sure to update all ACF fields on the Graphql queries, Graphql will only retrieve explicit fields that already exist, so you have to create the ACF field group and then add them into you queries on the Gatsby files.&nbsp;</p>
<p><strong>4#</strong> - If you are going to use a group of fields set for all posts or all pages, you will need to create a dummy post/page that contains all of these fields, if you don't do that and theres at least one field that it's not being used on wordpress but it's added on your query Graphql will scream at you with a huge exception.&nbsp;<strong>This is because on graphql you can not call a field to see if exist or not and and based on that you will show it, in graphql you need to write exactly all the fields you will retrieve and if they don't exist the query will fail.</strong></p>
<p><strong>5#</strong> - On the Gatsby structure there are two folders that will render your Pages, one its the folder Pages (duh!), in this folder every .js file you create there will be automatically converted into a page you can access using the file name as the pathname, <strong>example</strong>:&nbsp; your file&nbsp;<strong>Pages</strong>&gt;my-home.js will be rendered if you hit the url "yourpage.com/my-home". All the other pages that does not have an specific file on the <strong>Pages</strong> folder are going to be&nbsp;automatically rendered by the main template file <strong>Pages.js</strong> on the folder <strong>Templates.&nbsp;For more info <a href="https://www.gatsbyjs.org/docs/gatsby-project-structure/" target="_blank" rel="noopener">read this</a></strong></p>
<p><strong>6#&nbsp;</strong>Custom css for the master template its now being added on the folder <strong>Layouts &gt; custom.css</strong></p>
<h2>Contact form 7 integration + Google Recaptcha</h2>
<p><span style="font-size: 14px;">The integration with this plugin its really easy, i will not add a step by step guide because its really simple, i will just give you an overview</span></p>
<ul>
<li><span style="font-size: 14px;"><strong>1#</strong> - You need to install and activate <strong>Contact Form 7</strong> plugin&nbsp;</span></li>
<li><span style="font-size: 14px;"><strong>2#</strong> - Follow this guide to know hos to access the&nbsp;<a href="gatsby.raxo.dev/wp-admin" target="_blank" rel="noopener"><strong>Contact Form 7</strong> API</a></span></li>
<li><span style="font-size: 14px;"><strong>3#</strong> - Then you can use <a href="https://malcoded.com/posts/react-http-requests-axios/" target="_blank" rel="noopener">this guide</a> to know how to send the post request to your form using axios</span></li>
<li><span style="font-size: 14px;"><strong>4#</strong> - And for the last part, <a href="https://github.com/sarneeh/reaptcha" target="_blank" rel="noopener">use this package</a> to add the Google Recaptcha into your forms</span></li>
</ul>
<p><span style="font-size: 14px;"><strong>Note:&nbsp;</strong>You can install a plugin for <strong>Contact Form 7</strong> to save the submissions of your form in your wordpress installation and not just receiving them in your email.</span></p>
<h2>Mailchimp Integration</h2>
<p>Mailchimp integration it's a little limited but enough for basic subscribing on your page. For this we are going to use a Gatsby Plugin that you can find <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/" target="_blank" rel="noopener">here</a></p>
<h2>Getting the Wordpress logo and favicon</h2>
<p>Probably you might gonna get the logo and favicon from the ACF fields for dynamic purposes like having multiple logos for different color schemes, but maybe you want to pull the logo and the favicon from the wordpress customization menu.</p>
<p>I was not able to find an straightfoward way to pull that data from graphql but i managed to get it, the way i did it was:</p>
<ol>
<li>Upload your logo and favicon to wordpress gallery</li>
<li>Update the title of your logo image to "logo" (without the quotes)</li>
<li>Update the title of your favicon image to "favicon" (without the quotes)</li>
<li>Now if you installed all the plugins i mentioned above you can query both images with graphql like this: <br /><br /> <code>
 favicon: allWordpressWpMedia(filter: {title: {eq: "favicon"}}) { <br />
  &nbsp;&nbsp; nodes {<br />
  &nbsp;&nbsp; source_url<br />
&nbsp;&nbsp; title<br />
&nbsp;&nbsp;}<br />
}<br /></code><br /> <code>
 favicon: allWordpressWpMedia(filter: {title: {eq: "logo"}}) { <br />
  &nbsp;&nbsp; nodes {<br />
  &nbsp;&nbsp; source_url<br />
&nbsp;&nbsp; title<br />
&nbsp;&nbsp;}<br />
}<br />&nbsp;<br /></code></li>
</ol>
<hr />
<h2>Next Features to add into the project</h2>
<ul>
<li>Create a version of this project with woocommerce integration</li>
</ul># bruinsport
