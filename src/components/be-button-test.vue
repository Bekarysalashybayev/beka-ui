<template>
  <div>
    <button @mousedown="onMouseDown" @click="onClick" class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">

const onClick = () => {
  console.log("Click")
}

const onMouseDown = (e: MouseEvent) => {
  // Создаем элемент волны
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  // Получаем кнопку и ее размеры
  const button = e.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();

  // Позиционируем волну так, чтобы она расширялась из точки клика
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ripple.style.left = ${x}px;
  ripple.style.top = ${y}px;

  // Добавляем волну в кнопку
  button.appendChild(ripple);

  // Запускаем анимацию
  ripple.classList.add('active');

  setTimeout(() => {
    ripple.remove();
  }, 600); // Время анимации
};
</script>

<style>
.btn {
  padding: 12px 50px;
  border: none;
  border-radius: 5px;
  background-color: #1abc9c;
  color: #fff;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 6px 7px 40px -4px rgba(0, 0, 0, 0.2);
  width: 300px;

  &:focus {
    outline: none;
  }
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  transform: scale(0);
  pointer-events: none;
  width: 40px;
  aspect-ratio: 1; /* Поддержка квадратной формы */
}

/* Анимация эффекта */
.ripple.active {
  animation: ripple 0.6s ease;
}

/* Определяем анимацию */
@keyframes ripple {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(10); /* Измените масштаб на 10 для большей волны */
  }
}
</style>