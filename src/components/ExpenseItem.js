import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>  // 루트 요소가 한 개만 있도록 div 태그로 전체 감싸줌
    );
}

export default ExpenseItem;     // 함수를 이 파일의 기본 함수로 내보냄