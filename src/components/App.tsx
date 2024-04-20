import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "./hooks/useMemoList";

export const App: FC = () => {
  // カスタムフックからそれぞれ取得
  const { memos, addTodo, deleteTodo } = useMemoList();

  // テキストボックスState
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  // 追加ボタン押下時
  const onClickAdd = () => {
    addTodo(text);
    // テキストボックスを空に
    setText("");
  }

  // 削除ボタン押下時(何番目が押されたかを引数で受け取る)
  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
  }, [deleteTodo]); 

  return (
    <>
      <h1>簡単メモアプリ</h1>
      <div>
        <input type="text" value={text} onChange={onChangeText} />
        <SButton onClick={onClickAdd}>追加</SButton>
      </div>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;