import './menu-item.styles.css'

const MenuItem = ({ title, imageUrl, id, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl}/id/${id}/700/400)`
            }}>
        </div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;