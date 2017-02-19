/// <reference path="../interfaces.d.ts"/>

import React from 'react'
import moment from 'moment'

const style = {
    subtitle: {
        minWidth: 120,
        display: 'inline-block'
    },
    separator: {
        padding: '0 4px',
        display: 'inline-block'
    },
    description: {
        display: 'inline-block'
    },
    timestamp: {
        color: '#bbb', padding: 10 
    }
}

export class Project extends React.Component<IProject, undefined> { 
    render() : JSX.Element {
        const { homepage, name, description, updated_at } = this.props
        return (
            <div style={{display: 'flex', padding: 2}}>
                <div style={style.subtitle}><a href={homepage}>{name}</a></div>
                <div style={style.separator}>:</div>
                <div style={style.description}>
                    {description}
                    <span style={style.timestamp}>
                        {moment(updated_at).format('MMM YYYY')}
                    </span>
                </div>
            </div>
        )
    }
}