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
  