interface MapBannerProps {
  longitude: number;
  latitude: number;
}

const MapBanner: React.FunctionComponent<MapBannerProps> = ({
  longitude,
  latitude,
}) => {
  return (
    <div className="w-full h-96 relative">
        <iframe title="map"
        frameBorder="1"
        scrolling="no"
        style={{width:"100%", height:"100%"}}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=19.819974303245544%2C45.2458494607002%2C19.827216267585754%2C45.248500786310146&amp;layer=mapnik&amp;marker=45.247175138974114%2C19.82359528541565`}/>
        <button className="pink-button !rounded !text-lg absolute bottom-10 right-5"> View on google maps </button>
    </div>
  );
};

export default MapBanner;
