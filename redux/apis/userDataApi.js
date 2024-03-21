export function getAllData() {
    return new Promise((resolve, reject) => {
      try {
        fetch(`${process.env.backendurl}/getData`)
          .then(async (response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            resolve(data);
          })
          .catch(error => {
            // Handle fetch error
            console.error('Error fetching data:', error);
            reject(error);
          });
      } catch (error) {
        // Handle other errors
        console.error('Error:', error);
        reject(error);
      }
    });
  }
  export function uploadSourceCode(id) {
    return new Promise((resolve, reject) => {
      try {
        fetch(`${process.env.backendurl}/getDataById/${id}`)
          .then(async (response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data,"data from sql")
            // Sending the fetched data to another URL
            return fetch(`${process.env.backendurl}/uploadSourceCode`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data[0]),
            });
          })
          .then(async (secondResponse) => {
            if (!secondResponse.ok) {
              throw new Error('Second network response was not ok');
            }
            const responseData = await secondResponse.json();
            resolve(responseData);
          })
          .catch(error => {
            // Handle fetch error
            console.error('Error:', error);
            reject(error);
          });
      } catch (error) {
        // Handle other errors
        console.error('Error:', error);
        reject(error);
      }
    });
  }
  

  