const nunjucks = require('nunjucks');
const axios = require('axios');

// Configure Nunjucks
nunjucks.configure({ autoescape: true });

// Fetch the sample JSON data
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    const users = response.data;
    
    // Task 1: Render data based on ID and even/odd condition
    const renderedData = nunjucks.renderString(`
      {% for user in users %}
        {% if user.id is even %}
          Name: {{ user.name }}
          Username: {{ user.username }}
          Email: {{ user.email }}
        {% else %}
          I'm Odd
        {% endif %}
      {% endfor %}
    `, { users });

    console.log("Task 1:");
    console.log(renderedData);

    // Task 2: Render address data based on ID
    users.forEach(user => {
      const renderedAddress = nunjucks.renderString(`
       
        Address for ID {{ user.id }}:

        street: {{ user.address.street }}
        
        suite: {{ user.address.suite }}
        
        city: {{ user.address.city }}
        
        zipcode: {{ user.address.zipcode }}
        
        geo location: {{ user.address.geo.lat }}, {{ user.address.geo.lng }}
      `, { user });

      console.log("Task 2:");
      console.log(renderedAddress);
    });

    // Task 3: Render data based on email ending with ".biz"
    users.forEach(user => {
      if (user.email.endsWith('.biz')) {
        const renderedEmail = nunjucks.renderString(`Name: {{ user.name }} Email: {{ user.email }}`, { user });
        console.log("Task 3:");
        console.log(renderedEmail);
      }
    });

    // Task 4: Render data based on specific cities
    users.forEach(user => {
      const cities = ["Aliyaview", "Howemouth", "Gwenborough"];
      if (cities.includes(user.address.city)) {
        const renderedCityData = nunjucks.renderString(`
          The Zipcode and Geo of cityname {{ user.address.city }} is: {{ user.address.zipcode }} and Geo with lat and lang values: {{ user.address.geo.lat }}, {{ user.address.geo.lng }}
        `, { user });

        console.log("Task 4:");
        console.log(renderedCityData);
      }
    });

    // Task 5: Render max 15 letters of CatchPhrase
    users.forEach(user => {
      const maxCatchPhrase = user.company.catchPhrase.slice(0, 15);
      console.log("Task 5:");
      console.log(`CatchPhrase: ${maxCatchPhrase}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
