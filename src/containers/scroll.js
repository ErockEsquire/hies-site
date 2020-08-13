import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0,0)
      setTimeout(() => window.scrollTo(0,0), 100)
      setTimeout(() => window.scrollTo(0,0), 300)
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return (null);
}


export default withRouter(ScrollToTop);