import { useEffect, useId, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProductItem from '@/hooks/useProductItem';
import Spinner from '@/components/Spinner';

const initialFormState = {
  title: '',
  color: '',
  price: 0,
};

function ProductEdit() {
  const titleId = useId();
  const priceId = useId();
  const colorId = useId();

  // 서버의 id 값을 전달
  const { productId } = useParams();
  const navigate = useNavigate();
  console.log(navigate);
  const { isLoading, data } = useProductItem(productId);

  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (!isLoading && data) {
      setFormState({
        title: data.title,
        price: data.price,
        color: data.color,
      });
    }
  }, [isLoading, data]);

  const handleChangeInput = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleEditProduct = (e) => {
    e.preventDefault(); // onsubmit을 했을 때 브라우저의 기본...
    console.log(formState); // 서버에 업데이트 요청할 데이터 (서버 전송 PATCH 요청)
    // fetch API (직접 기술)

    // 1. 하드 코딩
    // client => server(pb)
    fetch(
      `${
        import.meta.env.VITE_PB_API
      }/collections/products/records/${productId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    // 2. 함수 재사용
    // 3.
  };

  const handleDeleteProduct = () => {
    const userConfirm = confirm('정..말로 지울건가요? 🥹');

    if (userConfirm) {
      fetch(
        `${
          import.meta.env.VITE_PB_API
        }/collections/products/records/${productId}`,
        {
          method: 'DELETE',
        }
      )
        .then(() => {
          // PB에서 지웠다(성공)
          // 제품 목록 페이지로 이동
          navigate('/products');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  if (isLoading) {
    return <Spinner size={120} />;
  }

  if (data) {
    return (
      <>
        <h2 className="text-2xl text-center">{data.title} 수정 폼</h2>
        {/* 업데이트 요청 */}

        <form onSubmit={handleEditProduct}>
          {/* title */}
          <div>
            <label htmlFor={titleId}>타이틀</label>
            {/*  */}
            <input
              type="text"
              name="title"
              id={titleId}
              value={formState.title}
              onChange={handleChangeInput}
            />

            {/* color */}
            <div>
              <label htmlFor={colorId}>컬러</label>
              <input
                type="text"
                name="color"
                id={colorId}
                value={formState.color}
                onChange={handleChangeInput}
              />
            </div>
            {/* price */}
            <div>
              <label htmlFor={priceId}>프라이스</label>
              <input
                type="number"
                name="price"
                id={priceId}
                value={formState.price}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div>
            <button type="submit">수정</button>
            <button type="button" onClick={handleDeleteProduct}>
              삭제
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default ProductEdit;
