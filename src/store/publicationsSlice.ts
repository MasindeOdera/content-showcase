import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchProjectsByCategory, searchPublicationsByName, fetchPublicationDetail } from '../services/apiService.ts';
import { Publication } from '../types/index.ts';

interface PublicationsState {
  items: Publication[];
  search: string;
  category: string;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  filterOptions: { value: string; label: string }[];
  selectedPublication: Publication | null;
}

const initialState: PublicationsState = {
  items: [],
  search: '',
  category: '',
  currentPage: 1,
  totalPages: 1,
  loading: false,
  filterOptions: [
    { value: 'all', label: 'All' },
    { value: 'annual_report', label: 'Annual Report' },
    { value: 'branded_content', label: 'Branded Content' },
    { value: 'brochure', label: 'Brochure' },
    { value: 'case_study', label: 'Case Study' },
    { value: 'customer_magazine', label: 'Customer Magazine' },
    { value: 'ebook', label: 'eBook' },
    { value: 'event_magazine', label: 'Event Magazine' },
    { value: 'manual', label: 'Manual' },
    { value: 'member_magazine', label: 'Member Magazine' },
    { value: 'newsletter', label: 'Newsletter' },
    { value: 'pitch_deck', label: 'Pitch Deck' },
    { value: 'presentation', label: 'Presentation' },
    { value: 'proposal', label: 'Proposal' },
    { value: 'productt_catalog', label: 'Product Catalog' },
    { value: 'report', label: 'Report' },
    { value: 'staff_magazine', label: 'Staff Magazine' },
    { value: 'other', label: 'Other' },
    { value: 'whitepaper', label: 'Whitepaper' },
  ],
  selectedPublication: null,
};

export const fetchProjectsByCategoryThunk = createAsyncThunk(
  'publications/fetchProjectsByCategory',
  async ({ page, newCategory }: { page: number; newCategory: string }) => {
    const response = await fetchProjectsByCategory(page, 20, newCategory);
    return { items: response.items as Publication[], totalPages: response.totalPages };
  }
);

export const searchPublicationsByNameThunk = createAsyncThunk(
  'publications/searchPublicationsByName',
  async ({ page, name }: { page: number; name: string }) => {
    const response = await searchPublicationsByName(page, 20, name);
    return { items: response.items as Publication[], totalPages: response.totalPages };
  }
);

export const fetchPublicationDetailThunk = createAsyncThunk(
  'publications/fetchPublicationDetail',
  async (id: string) => {
    const response = await fetchPublicationDetail(id);
    const publication = response;
    return publication;
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
      .addCase(fetchProjectsByCategoryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjectsByCategoryThunk.fulfilled, (state, action: PayloadAction<{ items: Publication[]; totalPages: number }>) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchProjectsByCategoryThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(searchPublicationsByNameThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchPublicationsByNameThunk.fulfilled, (state, action: PayloadAction<{ items: Publication[]; totalPages: number }>) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(searchPublicationsByNameThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchPublicationDetailThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPublicationDetailThunk.fulfilled, (state, action: PayloadAction<Publication>) => {
        state.loading = false;
        state.selectedPublication = action.payload;
      })
      .addCase(fetchPublicationDetailThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});


export const { setSearchQuery, setFilter, setCurrentPage } = publicationsSlice.actions;
export default publicationsSlice.reducer;
