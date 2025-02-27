import React from 'react';

export interface PostCodeData {
  status: number;
  result: {
    postcode: string;
    latitude: number;
    longitude: number;
    parliamentary_constituency: string;
    codes: {
      parliamentary_constituency: string;
    }
  }
}

export interface UsePostCodeApi {
  data: PostCodeData;
  fetchPostCode: (postcode: string) => void;
}

function usePostCodeApi() {
  const [data, setData] = React.useState<PostCodeData | undefined>();
  const fetchPostCode = React.useCallback((postCode: string) => {
    fetch(`http://api.postcodes.io/postcodes/${postCode}`)
      .then(r => r.json())
      .then(d => setData(d));
  }, []);

  return {
    data,
    fetchPostCode
  }
}

export default usePostCodeApi;
