import { create } from 'zustand';

const initialState = {
  step: 0,
  answers: {},
  resultType: null,
};

export const useAnswerStore = create((set) => ({
  ...initialState,

  setStep: (updater) =>
    set((state) => ({
      step: typeof updater === 'function' ? updater(state.step) : updater,
    })),

  setAnswer: (key, value) =>
    set((state) => ({
      answers: { ...state.answers, [key]: value },
    })),

  setResultType: (type) => set({ resultType: type }),

  reset: () => set(initialState),
}));
