import { create } from 'zustand';

export const useListStore = create((set) => ({
<<<<<<< HEAD
  // Query
=======
>>>>>>> fc544195833a2bea2118d2a5caac4a1fb5df6f3e
  list: [
    {
      id: crypto.randomUUID(),
      title: 'Zustand는 츄~스탄트로 발음합니다.',
    },
  ],

<<<<<<< HEAD
  // Mutation
=======
>>>>>>> fc544195833a2bea2118d2a5caac4a1fb5df6f3e
  addItem: (newItemTitle) =>
    set((state) => ({
      list: [
        ...state.list,
        {
          id: crypto.randomUUID(),
          title: newItemTitle,
        },
      ],
    })),
  deleteItem: (deleteId) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== deleteId),
    })),
<<<<<<< HEAD
}));
=======
}));
>>>>>>> fc544195833a2bea2118d2a5caac4a1fb5df6f3e
