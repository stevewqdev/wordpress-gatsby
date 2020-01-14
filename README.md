<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's + Wordpress Boilerplate + ACF
</h1>
<hr>
<p><br />This is a starter boilertplate powered by the Wordpress API and the blazing fast static site generator Gatsby. Also will let you use the awesome plugin ACF</p>
<p>The next documentation will show you how to set up a Wordpress instalation as a headless <strong>CMS</strong> using Gatsby integrated with Netlify to render the frontend of the page and how you can setup and use Netlify Hooks to re-deploy your website whenever you want.</p>
<p><strong><em>IMPORTANT: theres a way to deploy using the netlify hooks everytime you save or update a new post, but right now thats not the one used here, this one let's you do a full deploy after you finish all your changes and updates.</em></strong></p>
<p><strong>It might seem like a lot of steps, but all the setup its actually pretty straightfoward&nbsp;</strong></p>
<h2>Let's begin</h2>
<ol>
<li>Fork&nbsp;the current&nbsp;repository</li>
<li>Clone your forked repository</li>
<li><code>npm install --global gatsby-cli</code>&nbsp;(if you don't have Gatsby CLI installed)</li>
<li>In the root of your project&nbsp;do <code>npm install</code></li>
<li>Open the&nbsp;<code>.env.development and .env.production</code>&nbsp;file and change the variables&nbsp;GATSBY_WP_API_LINK and&nbsp;GATSBY_WP_API_URL with the url's that you are going to use on your project</li>
<li>Run&nbsp;<code>npm develop</code>&nbsp;-- <em>this command will run your Gatsby installation on your local enviroment</em></li>
</ol>
<p><em><strong>Important:</strong> Notice that there are two .env files, one its for you to use on your local development and the other its for the production environment, to make it work with netlify you must upload the envs file to your repository so <strong>BE SURE TO DONT ADD ANY SENSITIVE INFORMATION ON THE .ENV FILES.&nbsp;</strong></em></p>
<p>Also, in case you wonder, we are using the <a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noopener">NPM dotenv package</a> to manage the .env variables within the whole gatsby installation.</p>
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
<p>&nbsp;</p>
<p>&nbsp;</p>