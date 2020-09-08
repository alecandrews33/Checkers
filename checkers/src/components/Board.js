import React from 'react';
import styles from './Board.css';

export default class Board extends React.Component {
    render() {
        const tiles = Array(64)
            .fill(null)
            .map((_, i) => <Tile row={i % 8} column={i / 8} key={i} />);
        console.log(tiles);

        return (
            <div className={styles.gameBoard} children={tiles} />
        );
    }
}

type Props = {
    row: number,
    column: number
};

class Tile extends React.Component<Props> {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { row, column } = this.props;

        if (column * 8 + row % 2 === 0) {
            return <div className={styles.blackTile} />;
        }
        return <div className={styles.whiteTile} />;
    }
}