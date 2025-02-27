import React from 'react';
import usePostCodeApi from './usePostCodeApi';

function App() {
  const { data, fetchPostCode } = usePostCodeApi();

  const [postCode, setPostCode] = React.useState('NN126BQ');

  const onPostCodeChange: React.ChangeEventHandler<HTMLInputElement> = React
    .useCallback(({ target: { value } }) => setPostCode(value), []);

  const onSubmit: React.FormEventHandler = React.useCallback((e) => {
    fetchPostCode(postCode);
    e.preventDefault();
  }, [postCode, fetchPostCode]);

  return <div>
    <h1>Post Code Checker</h1>

    <form onSubmit={onSubmit}>
      <label>Post Code</label>
      <input value={postCode} onChange={onPostCodeChange} />
      <input type='submit' value='Lookup' />
    </form>

    {data &&
      <div>
        <h2>Value Retrieved</h2>
        <dl>
          <dt>Longitude</dt>
          <dd>{data.result.longitude}</dd>
          <dt>Latitude</dt>
          <dd>{data.result.latitude}</dd>
          <dt>Parlimentary Constituency</dt>
          <dd>{data.result.parliamentary_constituency}</dd>
          <dt>Code</dt>
          <dd>{data.result.codes.parliamentary_constituency}</dd>
        </dl>
      </div>
    }
  </div>
}

export default App
