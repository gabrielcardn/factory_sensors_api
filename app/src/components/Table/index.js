const Table = ({ columns, rows }) => {
    const handleCellClick = (column, row) => {
        if (column.clickable) {
            column.onClick(row);
        }
    };

    return (
        <table>
            <thead>
                <tr style={{textAlign: "left"}}>
                    {columns.map((column, index) => (
                        <th key={index}>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} style={{textAlign: "left"}}>
                        {columns.map((column, colIndex) => {
                            let style = column.style
                            if (column.clickable) {
                                style.cursor = "pointer"
                                style.textDecoration = "underline"
                            }
                            return <td
                                key={colIndex}
                                onClick={() => handleCellClick(column, row)}
                                style={style}
                            >
                                {column.cellRenderer(row)}
                            </td>
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;