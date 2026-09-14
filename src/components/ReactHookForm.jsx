import { useForm } from 'react-hook-form'; // Імпортуємо useForm для роботи з формою

function HookForm() {

  const {
    register, // Реєструє поля форми в React Hook Form

    handleSubmit, // Перевіряє форму і запускає onSubmit, якщо помилок немає

    formState: { errors } // Дістаємо об'єкт з помилками валідації

  } = useForm(); // Створюємо інструменти для роботи з формою


  const onSubmit = (data) => { // Функція виконається після успішної валідації

    console.log(data); // data містить name, email і password

  };


  return (

    <form onSubmit={handleSubmit(onSubmit)}> {/* При submit спочатку запускається валідація */}

      <h2>Реєстрація (React Hook Form)</h2>


      <div className="input-row">

        <label>Ім'я</label>

        <input
          type="text" // Звичайне текстове поле

          placeholder="Ім'я"

          {...register('name', { // Реєструємо поле під назвою name

            required: "Ім'я обов'язкове", // Поле не може бути порожнім

            minLength: { // Перевірка мінімальної довжини

              value: 2, // Мінімум 2 символи

              message: "Ім'я повинно містити щонайменше 2 символи" // Текст помилки

            }

          })}
        />

        {errors.name && (
          <p className="error-message">
            {errors.name.message}
          </p>
        )} {/* Якщо є помилка name — показуємо її */}

      </div>


      <div className="input-row">

        <label>Електронна пошта</label>

        <input
          type="email" // Поле для введення email

          placeholder="Електронна пошта"

          {...register('email', { // Реєструємо поле під назвою email

            required: 'Email обов’язковий', // Поле не може бути порожнім

            pattern: { // Правило перевірки формату email

              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Шаблон: щось@щось.щось

              message: 'Введіть коректний email' // Повідомлення при неправильному форматі

            }

          })}
        />

        {errors.email && (
          <p className="error-message">
            {errors.email.message}
          </p>
        )} {/* Якщо є помилка email — показуємо її */}

      </div>


      <div className="input-row">

        <label>Пароль</label>

        <input
          type="password" // Приховує введені символи

          placeholder="Пароль"

          {...register('password', { // Реєструємо поле під назвою password

            required: "Пароль обов'язковий", // Поле не може бути порожнім

            minLength: { // Перевірка мінімальної довжини

              value: 8, // Мінімум 8 символів

              message: 'Пароль повинен містити щонайменше 8 символів' // Текст помилки

            }

          })}
        />

        {errors.password && (
          <p className="error-message">
            {errors.password.message}
          </p>
        )} {/* Якщо є помилка password — показуємо її */}

      </div>


      <button type="submit">
        Увійти
      </button> {/* Запускає handleSubmit(onSubmit) */}

    </form>

  );

}

export default HookForm; // Дозволяємо імпортувати компонент в інших файлах