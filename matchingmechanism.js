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
        outputUriPrefix: 'gs://hmb1/YOUR_OUTPUT_FOLDER'
      }
    },
    model: 'projects/amiable-bonus-387606/locations/YOUR_LOCATION_ID/models/YOUR_MODEL_ID',
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
