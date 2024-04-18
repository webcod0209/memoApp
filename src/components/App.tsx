

export const App = () => {
  return (
    <>
      <h1>簡単メモアプリ</h1>
      <div>
        <input type="text" />
        <button>追加</button>
      </div>
      <div>
        <h2>メモ一覧</h2>
        <ul>
          <li>
            <span>本を読む</span>
            <button>削除</button>
          </li>
        </ul>
      </div>
    </>
  );
};