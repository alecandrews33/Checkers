import React from 'react';
import styles from './Board.css';

export default class Board extends React.Component {
    render() {
        return (
            <div className={styles.gameBoard}>
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
                <div className={styles.whiteTile} />
                <div className={styles.blackTile} />
            </div>
        );
    }
}

/*class Tile extends React.Component {
    render() {
        if (this.props.color === styles.blackTile) {
            return <div className={styles.blackTile} />
        } else {
            return <div className={styles.whiteTile} />
        }
    }
}*/

