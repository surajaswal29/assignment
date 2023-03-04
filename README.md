# Assignment
Node JS Intern Assignment

<h4>Objective: Build a RESTful API that can /create/read/update/delete Product and Category data from a
persistence database.</h4>

<h4>Required Applications/package/framework</h4>
<ul>
    <li>Node JS - JavaScript cross-platform runtime environment </li>
    <li>Mongo DB Atlas Cloud Database - No SQL document database</li>
    <li>Express Js - Backend Nodejs Framework</li>
    <li>Mongoose - Object modeling tool for MongoDB.</li>
    <li>Body-parser - process data sent in an HTTP request body</li>
    <li>DotEnv - manage environment variables</li>
</ul>

<h4>Postman Documentation</h4>
<a href="https://documenter.getpostman.com/view/26157365/2s93CUKAzg">View Postman Documentation</a>

<h4>API Demo Link</h4>
https://assignment-6zyh.onrender.com

<h3>Create New Product and Category</h3>
<p>POST Request => https://assignment-6zyh.onrender.com/api/v1/create</p>
<span>Example =></span>
<pre>
{
    "productName":"Demo Product2",
    "qtyPerUnit":10,
    "unitPrice":20000,
    "unitInStock":200,
    "discontinued":"yes",
    "categoryName":"Demo Category2"
}
</pre>
<h3>Read One Product</h3>
<p>GET Request => https://assignment-6zyh.onrender.com/api/v1/read/PRODUCT_ID</p>
<span>Example =></span>
<pre>
https://assignment-6zyh.onrender.com/api/v1/read/6402dc96fe130fc6c4fb3fb6
</pre>

<h3>Read All Product</h3>
<p>GET Request => https://assignment-6zyh.onrender.com/api/v1/readAll</p>
<span>Example =></span>
<pre>
https://assignment-6zyh.onrender.com/api/v1/readAll
</pre>

<h3>Update Product</h3>
<p>PUT Request => https://assignment-6zyh.onrender.com/api/v1/update/PRODUCT_ID</p>
<span>Example =></span>
<pre>
 https://assignment-6zyh.onrender.com/api/v1/update/6402dc96fe130fc6c4fb3fb6
</pre>

<h3>Delete Product</h3>
<p>DELETE Request => https://assignment-6zyh.onrender.com/api/v1/delete/PRODUCT_ID</p>
<span>Example =></span>
<pre>
 https://assignment-6zyh.onrender.com/api/v1/delete/6402dc96fe130fc6c4fb3fb6
</pre>
