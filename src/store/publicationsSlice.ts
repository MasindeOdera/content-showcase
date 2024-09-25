import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchProjects } from '../services/apiService';
import { Publication } from '../types';

interface PublicationsState {
  items: Publication[];
  search: string;
  category: string;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  filterOptions: { value: string; label: string }[];
}

const initialState: PublicationsState = {
  items: [],
  search: '',
  category: '',
  currentPage: 1,
  totalPages: 1,
  loading: false,
  filterOptions: [
    { value: '', label: 'All' },
    { value: 'annual-Report', label: 'Annual Report' },
    { value: 'branded-content', label: 'Branded Content' },
    { value: 'brochure', label: 'Brochure' },
    { value: 'case-study', label: 'Case Study' },
    { value: 'customer-magazine', label: 'Customer Magazine' },
    { value: 'ebook', label: 'eBook' },
    { value: 'event-magazine', label: 'Event Magazine' },
    { value: 'manual', label: 'Manual' },
    { value: 'member-magazine', label: 'Member Magazine' },
    { value: 'newsletter', label: 'Newsletter' },
    { value: 'pitch-deck', label: 'Pitch Deck' },
    { value: 'presentation', label: 'Presentation' },
    { value: 'proposal', label: 'Proposal' },
    { value: 'product-catalog', label: 'Product Catalog' },
    { value: 'report', label: 'Report' },
    { value: 'staff-magazine', label: 'Staff Magazine' },
    { value: 'other', label: 'Other' },
  ],
};

export const fetchPublications = createAsyncThunk(
  'publications/fetchPublications',
  async ({ page, query }: { page: number; query: { search: string; category: string } }) => {
    const response = await fetchProjects(page, query);
    return { items: response.items as Publication[], totalPages: response.totalPages };
  }
);

const publicationsSlice = createSlice({
  name: 'publications',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPublications.fulfilled, (state, action: PayloadAction<{ items: Publication[]; totalPages: number }>) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPublications.rejected, (state) => {
        state.loading = false;
      });
  },
});


export const { setSearchQuery, setFilter, setCurrentPage } = publicationsSlice.actions;
export default publicationsSlice.reducer;
