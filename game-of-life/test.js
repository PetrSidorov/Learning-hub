/*
type Payload = any;
type RemoveEventListener = () => void;
type EventListener = (payload?: Payload) => void | Promise<void>;

interface IEventEmitter {
  // Подписывает слушатель к событию event,
  // Возвращает функцию, вызов которой отписывает слушатель от события event
  addEventListener(event: string, listener: EventListener): RemoveEventListener;

  // Вызывает всех слушателей, привязанных к событию event
  // При вызове слушателя дополнительным аргументом может быть передан payload (произвольные данные)
  dispatchEvent(event: string, payload?: Payload): void;
}
*/

const makeEventEmitter = (mode = "default") => {
  let listeners = {};
  return {
    addEventListener: (event, listener) => {
      if (!listeners[event]) {
        listeners[event] = [listener];
      } else {
        listeners[event] = listeners[event].push(listener);
      }

      return () => {
        listeners = {
          ...listeners,
          [event]: listeners[event].filter((l) => listener != l),
        };
      };
    },
    once: (event, listener) => {
      let onceListener = null;

      const removeEventListener = () => {
        listeners = {
          ...listeners,
          [event]: listeners[event].filter((l) => onceListener != l),
        };
      };

      onceListener = () => {
        listener();
        removeEventListener();
      };

      if (!listeners[event]) {
        listeners[event] = [onceListener];
      } else {
        listeners[event] = listeners[event].push(onceListener);
      }

      return removeEventListener;
    },
    dispatchEvent: (event, payload) => {
      for (let callEvent of listeners[event]) {
        if (mode == "default") {
          callEvent(payload);
        } else if (mode == "microtask") {
          queueMicrotask(() => callEvent(payload));
        } else if (mode == "macrotask") {
          setTimeout(() => callEvent(payload), 0);
        } else {
          throw new Error("");
        }
      }
    },
  };
};

const button = makeEventEmitter();

button.addEventListener("click", () => console.log("Один"));
button.once("click", () => console.log("Два"));

// Оповещаем слушателей о событии 'click'
button.dispatchEvent("click");
button.dispatchEvent("click");
