export function ContactsPage() {
  return (
    <div style={{ maxWidth: '1170px', margin: '40px auto', padding: '0 16px' }}>
      <h1 style={{ fontFamily: 'var(--font-main)', fontSize: '36px', marginBottom: '24px' }}>
        Контакты
      </h1>
      
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {/* Левая колонка - контакты */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Как с нами связаться</h2>
          <p style={{ marginBottom: '8px' }}>Телефон: <a href="tel:+78005553535">+7 (800) 555-35-35</a></p>
          <p style={{ marginBottom: '8px' }}>Email: <a href="mailto:info@edu-platform.ru">info@edu-platform.ru</a></p>
          <p style={{ marginBottom: '8px' }}>Адрес: г. Казань, ул. Фучика, д. 32</p>
          <p style={{ marginTop: '24px', color: '#666' }}>
            Мы работаем с физическими и юридическими лицами. Оставьте заявку, и мы подберем для вас идеального лектора.
          </p>
        </div>

        {/* Правая колонка - форма (визуальная заглушка) */}
        <div style={{ flex: '1', minWidth: '300px', background: '#f9fafb', padding: '10px', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Оставить заявку</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input type="text" placeholder="Ваше имя" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
            <input type="tel" placeholder="Телефон" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
            <textarea placeholder="Комментарий (какая дисциплина интересует?)" rows="4" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}></textarea>
            <button type="button" style={{ padding: '12px', background: '#374EE4', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}