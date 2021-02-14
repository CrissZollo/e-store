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
                    imageUrl: 'https://source.unsplash.com/random',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://source.unsplash.com/random',
                    id: 2,
                    linkUrl: 'jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://source.unsplash.com/random',
                    id: 3,
                    linkUrl: 'sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://source.unsplash.com/random',
                    size: 'large',
                    id: 4,
                    linkUrl: 'womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://source.unsplash.com/random',
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