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
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://picsum.photos',
                    id: 2,
                    linkUrl: 'jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://picsum.photos',
                    id: 3,
                    linkUrl: 'sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://picsum.photos',
                    size: 'large',
                    id: 4,
                    linkUrl: 'womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://picsum.photos',
                    size: 'large',
                    id: 5,
                    linkUrl: 'mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...otherSectionProps }) => (<MenuItem key={id} id={id} {...otherSectionProps} />))}
            </div>
        )
    }
}

export default Directory;