type Params = {
    name: string;
    data: { [key: string]: string };
  };
  
  export const trackEvent = (params: Params) => {
    if (window.plausible) {
      window.plausible(params.name, { props: params.data });
    }
  };