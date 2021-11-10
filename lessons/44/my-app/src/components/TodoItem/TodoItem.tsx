import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import styles from './TodoItem.module.css';
import { Todo } from '../../constants/Todo';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/actions/actions';
import { completeTodo, editTodo } from 'redux/actions/actions';
import editIcon from 'img/EditIcon.svg';
import deleteIcon from 'img/DeleteIcon.svg';

interface IProps {
  item: Todo;
}

const TodoItem: FC<IProps> = (props) => {
  const { item } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(item.title);
  const dispatch = useDispatch();

  const completeOnChange = useCallback(() => {
    dispatch(completeTodo(item.id));
  }, [dispatch, item.id]);

  const editOnClick = useCallback(() => {
    setIsEdit(true);
  }, [setIsEdit]);

  const saveOnClick = useCallback(() => {
    setIsEdit(false);
    dispatch(editTodo(item.id, updatedTitle));
  }, [setIsEdit, dispatch, updatedTitle, item.id]);

  const onChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUpdatedTitle(e.target.value);
    },
    [setUpdatedTitle]
  );

  return (
    <div className={styles.toDoItem}>
      {!isEdit && (
        <>
          {item.title}
          <div className={styles.toDoItemIcons}>
            <input
              type="checkbox"
              checked={item.isDone}
              onChange={completeOnChange}
              className={styles.toDoCheck}
            />
            <div className={styles.iconButton} onClick={editOnClick}>
              <img className={styles.editIconItem} src={editIcon} alt="edit" />
            </div>
            <div
              className={styles.iconButton}
              onClick={() => {
                dispatch(deleteTodo(item.id));
              }}
            >
              <img
                className={styles.deleteIconItem}
                src={deleteIcon}
                alt="delete"
              />
            </div>
          </div>
        </>
      )}
      {isEdit && (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={onChangeTitle}
            className={styles.editTaskInput}
          />
          <Button text="Save" onClick={saveOnClick} saveButton />
        </>
      )}
    </div>
  );
};

export default TodoItem;
