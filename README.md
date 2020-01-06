<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's + Wordpress Boilerplate
</h1>
<p>This is a boilerplate template with basic configuration to start a new project using Gatsby and Wordpress as a headless CMS</p>
<hr>
<h2>Some basic stuff about the folder structure on Gatsby</h2>
<p>
All the logic, structure and styling code its inside de <strong>src</strong> folder
<br>
You can read more about it <a href="https://www.gatsbyjs.org/docs/gatsby-project-structure/" target="_BLANK">HERE</a></p>


<h2>On this boilerplate</h2>
<p>We have some extra folders already created, but let start for the basics <br>

<h2>Pages configuration and custom template pages</h2>

On the gatsby-node.js file we have the configuration for retriving Post and Pages, on that file we are looping trought the pages and showing the selected one. Notice that if you need an specific page to use an specific template you can add a conditional using the page slug into the pages.forEach loop and selecting a different template path for the template. <br>

In this configuration we can do that but we are not using it that way, we are directly adding pages into the Pages folder, because how its mentioned on the gatsby documentation every file there will be converted into a page using the name structure. <br>

If you are using the Pages folder to create a new page, in order to retrieve all the data you need to use a grapql query, where you are going to specify wich data you need. In the case on the index.js file we have on the Pages folder the query looks  like this

</p>
<code>
query MyQuery {
  allWordpressPage(filter: {path: {eq: "/"}}) {
    edges {
      node {
        id
        title
        content
        date(formatString: "dddd, MMMM YYYY")
      }
    }
  }
}
</code>
<p>Notice that in this block of quote we are telling Graphql to return the data from the page with a path = '/' this means that this index.js file will be always returnin the data from the page that its set to the homepage on wordpress</p>
<p>To retreive the ACF fields for the page you need to be specific with wich fields you need </p>
<code>
query MyQuery {
  allWordpressPage(filter: {path: {eq: "/"}}) {
    edges {
      node {
        id
        title
        content
        date(formatString: "dddd, MMMM YYYY")
        acf{
          fieldname
          fieldname
          fieldname
        }
      }
    }
  }
}
</code>
<p>Look that in this code we added the acf property with the fields you want to retrieve inside (you need to change fieldname to the actual name of you fields)</p>
<br>
<p>On the templates folder theres a file called Page.js this file will be the template used to show all the pages that does not have an specific file like the index.js we are using for retrieving the home. The issue with this page.js its that in order to return the ACF fields you need to specify them, but, if you have multiple page with different ACF fields you will need to create a dummy post with all those fields so the page will not show an error message because it can find some field <br>  This is why to me its a better option to create specific pages or templates if you are going to use different ACF for the pages</p>
<br>
<h2>Post configuration</h2>
<p>Same as with the pages, theres a posts.js on the Templates file, this file its the one who manages the displaying the blog and the list of posts. This page dont have an specific query added to it, it just returns the posts from the DB, you can change this query on the folder queries>queryall.js and on the gatsby-node.js file <br> 

If you need to add a custom query for returning data for the blog page, you can do it using the StaticQuery property from React and creating a query on that file. 
</p>
<br>
<p>The other important file here its the posts.js (singular one) this one its the template used for show each individual post. Same, as on the page.js file theres a query with all the data, and you can add ACF to the post query</p>
<h2>Still needs fixing</h2>
<ul>
<li>Currently all the meta data config its coming from the gatsby-config.js on the next commit this issue will be fixed</li>
</ul>

</p>