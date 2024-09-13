import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //! ============ initialState تحديد الحالة الأولية ===============
  // * هلأ ال name هو الاسم الي بستخدمه لحتى احكي في مع ال store
  name: "cart",
  // * هون احنا بدنا نجيب الحالة الأولية لل state تبعتنا عن طريق انو ناخد القيم من local اذا مخزنة هناك او اعطيني مصفوفة فاضية
  // * وخلي ببالك انو بحولها من json الى js لحتى اقدر اتفاهم مع البيانات وبهاي الحالة بستخدم json.parse
  initialState: {
    items: JSON.parse(localStorage.getItem("cart")) || [],
  },
  //! =============================

  //! =================== reducers كيفية تعديل الحالة بناءََا على action =========================
  reducers: {
    //TODO ************* add to cart ******************
    // ال reducer الأول هو addItem بياخد قيمتين الحالة الحالية (الابتدائية) وايضا الفعل او الحدث الي صار على هاي الحالة الي هو ال action
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    //TODO *******************************************

    //TODO ****************** Delete ***********************
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    //TODO *******************************************

    //TODO ****************** Update ***********************
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    //TODO *******************************************
  },
  //! ==========================================================
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
