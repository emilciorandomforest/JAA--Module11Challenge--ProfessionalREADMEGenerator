// function to generate markdown for README
function generateMarkdown(data) {
  return `<h1>${data.title}</h1>
    <h2>Table of Contents</h2>
      <p>${data.tableOfContents}</p>
        <ul>
          <li><a href="#description">Description</a></li>
          <li><a href="#usage">Usage</a></li>
          <li><a href="#installation">Installation</a></li>
          <li><a href="#license">License</a></li>
          <li><a href="#testing">Testing</a></li>
          <li><a href="#contributions">Contribution Guidelines</a></li>
          <li><a href="#questions">Questions</a></li>
        </ul>
  <h2 id="Description">Description</h2>
    <p>${data.description}</p>
  <h2 id="usage">Usage</h2>
    <p>${data.usageInformation}</p>
  <h2 id="installation">Installation</h2>
    <p>${data.installation}</p>
  <h2 id="license">License</h2>
    <p>This project is covered under the ${data.license} license.</p>
  <h2 id="testing">Testing</h2>
    <p>${data.teststst}</p>  
  <h2 id="contributions">Contribution Guidelines</h2>
    <p>${data.contributionGuidelines}</p>
  <h2 id="questions">Questions</h2>
    <p>${data.questions}</p>
    <p>My GitHub username is ${data.username}</p>
    <p>You can find my GitHub here: ${data.username}.</p>
    <p>You can feel free to contact me at the following e-mail address: ${data.username}.</p>
    <p>Feel free to reach out with any questions that you might have about this README Generator project.</p>
`;
}

module.exports = generateMarkdown;
