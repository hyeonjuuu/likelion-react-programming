import { numberWithComma } from '@/utils';
import { useState } from 'react';

function ComponentPropTypes() {
  const [screencast, setScreencast] = useState({
    id: 'kciskdfkijc',
    title: '화면 공유',
    tags: ['zoom', 'screen share', 'online lecture'],
    isOnline: true,
    price: 180000,
  });

  const { id, title, tags, isOnline, price } = screencast;

  return (
    <div>
      <h2>ComponentPropTypes</h2>
      <ScreenCast
        id={id}
        title={title}
        tags={tags}
        isOnline={isOnline}
        price={price}
        // {...screencast}
      />
    </div>
  );
}

function ScreenCast(props) {
  return (
    <dl lang="en">
      <dt>ID</dt>
      <dd>{props.id}</dd>
      <dt>Title</dt>
      <dd>{props.title}</dd>
      <dt>Online</dt>
      <dd>{props.isOnline ? '🟢' : '🔴'}</dd>
      <dt>Price</dt>
      <dd>{numberWithComma(props.price)}</dd>
      <dt>Tags</dt>
      <dd>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </dd>
    </dl>
  );
}

export default ComponentPropTypes;
