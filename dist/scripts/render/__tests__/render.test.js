import { createListItem } from "../render";



it('Should return sum of two numbers', () => {
  const result = createListItem({text: 'some text', done: true, id: 123 })
  const expectation = `
    <li class="list-item list__item" data-id="123">
      <input type="checkbox" class="list-item__checkbox">
        some text
        <button class="list-item__delete-btn"></button>
    </li>`;
  expect(result).toBe(expectation);
});
it('Should return multiplying of two numbers', () => {
  const result = mult(2, 3);
  expect(result).toBe(6);
});
