// Set up the request options
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer PLS_REQUEST_GENERATED_TOKEN_BY_MANAGEMENT'
  },
  body: JSON.stringify({
    inputConfig: {
      gcsSource: {
        inputUris: ['gs://hmb1/h1.csv']
      },
      dataType: 'CSV'
    },
    outputConfig: {
      gcsDestination: {
        outputUriPrefix: 'gs://hmb1/result'
      }
    },
    model: 'projects/amiable-bonus-387606/locations/us-central2/models/423958291212934349',
    params: {
      scoreThreshold: '0.5'
    }
  })
};

// Make the API request
fetch('https://automl.googleapis.com/v1beta1/onemillionyearslater:batchPredict', options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
