import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
        </div>  // 루트 요소가 한 개만 있도록 div 태그로 전체 감싸줌
    );
}

export default ExpenseItem;     // 함수를 이 파일의 기본 함수로 내보냄