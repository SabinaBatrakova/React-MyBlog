import { useState } from "react";

const BlogForm = ({ onSubmit }) => {
    const [form, setForm] = useState({title:'', description: '', date: ''})
    const maxTitleLenght = 50;
    const maxDescriptionLength = 100;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({...prevForm, [name]: value}));
    };

    const handleBtnClick = (e) => {
       e.preventDefault();
       const currentDate = new Date().toLocaleString(); 
       const postCurrentDate = { ...form, date: currentDate };
        console.log('Опубликовано', postCurrentDate);
        onSubmit(postCurrentDate);
        setForm({title:'', description: '', date:''});
    };

    const handleReset = () => {
        console.log('reset')
        setForm({title:'', description: '', date: ''}) 
}

const isTitleLimit = form.title.length > maxTitleLenght;
const isDescriptionLimit = form.description.length > maxDescriptionLength;


return (
    <div className='container'>
       <form onSubmit={handleBtnClick}>
        
        <div className='section-input'>
          <input 
              type ='text'
              className ='style-title'
              name ='title'
              placeholder="Заголовок"
              value={form.title}
              onChange={handleChange}
              maxLength={maxTitleLenght}
          />
          { isTitleLimit && (
            <p>Лимит {maxTitleLenght} символов превышен.</p>
          )}

        <div className="qty-symbols">
          <p>{form.title.length}/{maxTitleLenght}</p>
        </div>

        <textarea
            className ='style-post'
            name ='description'
            placeholder="Описание"
            value={form.description}
            onChange={handleChange}
            maxLength={maxDescriptionLength}
        />
        { isDescriptionLimit && (
          <p>Лимит {maxDescriptionLength} символов превышен.</p>
        )}


        <div className="qty-symbols">
          <p>{form.description.length}/{maxDescriptionLength}</p>
        </div>

        <div className="btn-posts">
            <button 
                  onClick={handleBtnClick}>
                  Добавить
            </button>

              <button 
                  className="btn" 
                  type="button" 
                  onClick={handleReset} >
                  Сбросить
              </button>
          </div>
      </div>
      </form>
  </div>
  )
}

export default BlogForm