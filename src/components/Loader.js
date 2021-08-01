import ContentLoader, { Facebook } from "react-content-loader";

const Loader = () => {
    return (
        <>
        <ContentLoader 
        speed={2}
        width={800}
        height={100}
        viewBox="0 0 1000 110"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="3" y="20" rx="5" ry="5" width="1000" height="7" /> 
        <rect x="5" y="41" rx="5" ry="5" width="1000" height="7" /> 
        <rect x="5" y="60" rx="5" ry="5" width="1000" height="7" /> 
        <rect x="6" y="77" rx="5" ry="5" width="1000" height="7" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={800}
        height={100}
        viewBox="0 0 1000 110"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="3" y="20" rx="5" ry="5" width="1000" height="7" /> 
        <rect x="5" y="41" rx="5" ry="5" width="1000" height="7" /> 
        <rect x="5" y="60" rx="5" ry="5" width="1000" height="7" /> 
        <rect x="6" y="77" rx="5" ry="5" width="1000" height="7" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={800}
        height={100}
        viewBox="0 0 1000 110"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="3" y="20" rx="5" ry="5" width="1000" height="7" /> 
        <rect x="5" y="41" rx="5" ry="5" width="1000" height="7" /> 
        <rect x="5" y="60" rx="5" ry="5" width="1000" height="7" /> 
        <rect x="6" y="77" rx="5" ry="5" width="1000" height="7" />
      </ContentLoader>
        </>

    )
}

export default Loader;