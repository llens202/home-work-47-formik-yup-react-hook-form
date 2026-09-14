import { useFormik } from 'formik'; // Імпортуємо хук Formik для керування формою
import * as Yup from 'yup'; // Імпортуємо Yup для валідації


function LoginForm() {

  const validationSchema = Yup.object({ // Створюємо схему правил валідації

    name: Yup // Правила для поля name
      .string() // Значення має бути рядком
      .required("Ім'я обов'язкове"), // Поле не може бути порожнім

    email: Yup // Правила для поля email
      .string() // Значення має бути рядком
      .email('Будь ласка, введіть дійсну електронну адресу') // Перевірка формату email
      .required('Електронна пошта обов’язкова'), // Поле не може бути порожнім

    password: Yup // Правила для password
      .string() // Значення має бути рядком
      .min(8, 'Пароль повинен містити щонайменше 8 символів') // Мінімум 8 символів
      .required('Пароль обов’язковий') // Поле обов’язкове
  });

  const formik = useFormik({ // Створюємо Formik і отримуємо інструменти для роботи з формою

    initialValues: { // Початкові значення полів
      name: '', // Спочатку name порожній
      email: '', // Спочатку email порожній
      password: '' // Спочатку password порожній
    },

    validationSchema, // Підключаємо Yup-схему до Formik

    onSubmit: (values) => { // Спрацьовує, якщо форма успішно пройшла валідацію
      console.log('Форма успішно відправлена:', values); // values містить name, email і password
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}> {/* Formik обробляє submit форми */}
    <h2>Реєстрація (Formik)</h2>

    <div className="input-row">

      <label>Ім'я</label>

      <input
        type="text" // Текстове поле для імені
        name="name" // Formik розуміє, що це поле name
        value={formik.values.name} // Поточне значення name береться з Formik
        onChange={formik.handleChange} // Formik стежить за зміною значення
        onBlur={formik.handleBlur} // Formik фіксує, що користувач залишив поле
        placeholder="Ім'я"
      />

      {formik.touched.name && formik.errors.name && (
        <p className="error-message">{formik.errors.name}</p>
      )}

      </div>

    <div className="input-row">
      <label>Електронна пошта</label>

      <input
        type="email" // Поле для введення email
        name="email" // Formik розуміє, що це поле email
        value={formik.values.email} // Поточне значення email береться з Formik
        onChange={formik.handleChange} // Formik стежить за зміною значення
        onBlur={formik.handleBlur} // Formik фіксує, що користувач залишив поле
        placeholder="Електронна пошта"
      />

      {formik.touched.email && formik.errors.email && (
        <p className="error-message">{formik.errors.email}</p>
      )}

      </div>

      <div className="input-row">
      <label>Пароль</label>

      <input
        type="password" // Приховує введені символи
        name="password" // Formik розуміє, що це поле password
        value={formik.values.password} // Поточне значення password береться з Formik
        onChange={formik.handleChange} // Оновлює password у Formik
        onBlur={formik.handleBlur} // Позначає поле як touched після виходу з нього
        placeholder="Пароль"
      />

      {formik.touched.password && formik.errors.password && (
        <p className="error-message">{formik.errors.password}</p>
      )}

      </div>

      
      <button type="submit">
        Увійти
      </button>
    

    </form>
  );
}

export default LoginForm; // Дозволяємо використовувати компонент в інших файлах