import React from 'react';


import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.css'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://picsum.photos',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://picsum.photos',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://picsum.photos',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://picsum.photos',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://picsum.photos',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, size }) => (<MenuItem key={id} title={title} imageUrl={imageUrl} id={id} size={size} />))}
            </div>
        )
    }
}

export default Directory;