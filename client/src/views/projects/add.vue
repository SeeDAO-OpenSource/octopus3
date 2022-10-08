<template>
  <div class="layout-px-spacing apps-invoice-add">
    <portal to="breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">{{ $t('projects') }}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>{{ $t('project-add') }}</span>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </portal>
    <div class="row invoice layout-top-spacing layout-spacing">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="doc-container">
          <div class="row">
            <!--左邊-->
            <div class="col-xl-9">
              <div class="invoice-content">
                <div class="invoice-detail-body">
                  <div class="invoice-detail-header">
                    <div class="row justify-content-between">
                      <div class="col-xl-5 invoice-address-company">
                        <!-- <h4>From:-</h4> -->

                        <div class="invoice-address-company-fields">
                          <div class="form-group row">
                            <label
                              for="company-name"
                              class="col-sm-3 col-form-label col-form-label-sm"
                              >公會</label
                            >
                            <div class="col-sm-9">
                              <b-input
                                v-model="params.from.name"
                                size="sm"
                                id="company-name"
                                placeholder="Business Name"
                              ></b-input>
                            </div>
                          </div>

                          <div class="form-group row">
                            <label
                              for="company-email"
                              class="col-sm-3 col-form-label col-form-label-sm"
                              >發放人</label
                            >
                            <div class="col-sm-9">
                              <b-input
                                v-model="params.from.email"
                                size="sm"
                                id="company-email"
                                placeholder="name@company.com"
                              ></b-input>
                            </div>
                          </div>

                          <div class="form-group row">
                            <label
                              for="company-address"
                              class="col-sm-3 col-form-label col-form-label-sm"
                              >積分</label
                            >
                            <div class="col-sm-9">
                              <b-input
                                v-model="params.from.address"
                                size="sm"
                                id="company-address"
                                placeholder="XYZ Street"
                              ></b-input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="invoice-detail-note">
                    <div class="row">
                      <div class="col-md-12 align-self-center">
                        <div class="form-group row invoice-note">
                          <label
                            for="invoice-detail-notes"
                            class="col-sm-12 col-form-label col-form-label-sm"
                            >原因:</label
                          >
                          <div class="col-sm-12">
                            <b-textarea
                              v-model="params.notes"
                              rows="3"
                              id="invoice-detail-notes"
                              placeholder='Notes - For example, "Thank you for doing business with us"'
                            ></b-textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--右邊-->
            <div class="col-xl-3">
              <div class="invoice-actions-btn">
                <div class="invoice-action-btn">
                  <div class="row">
                    <!-- <div class="col-xl-12 col-md-4">
                      <b-button tag="a" variant="primary" class="btn-send"
                        >Send Invoice</b-button
                      >
                    </div>
                    <div class="col-xl-12 col-md-4">
                      <b-button
                        tag="a"
                        to="/apps/invoice/preview"
                        variant="dark"
                        class="btn-preview"
                        >Preview</b-button
                      >
                    </div> -->
                    <div class="col-xl-12 col-md-4">
                      <b-button tag="a" variant="success" class="btn-download"
                        >Save</b-button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import '@/assets/sass/apps/invoice-add.scss';
import { mapGetters, mapActions } from 'vuex';
import { GET_WALLET_SHORT_ADDRESS } from '@/store/wallet.module';

export default {
  metaInfo: { title: 'Projects Add' },
  computed: {
    ...mapGetters([GET_WALLET_SHORT_ADDRESS]),
    ...mapActions([]),
  },
  data() {
    return {
      portfolioId: '62794c52e276ee9d59f56b39',
      markPriceUpdateTime: 0,
      items: [],
      selected_file: null,
      params: {
        title: '',
        invoice_no: '',
        from: { name: '', email: '', address: '', phone: '' },
        to: { name: '', email: '', address: '', phone: '' },

        invoice_date: '',
        due_date: '',
        bank_info: { no: '', name: '', swift_code: '', country: '' },
        notes: '',
      },
      currency_list: [],
      selected_currency: { key: 'USD - US Dollar', thumb: 'flags/en.png' },
      tax_type_list: [],
      selected_tax_type: { key: 'None', value: null },
      discount_list: [],
      selected_discount: { key: 'None', value: null, type: '' },
      meta: {},
    };
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>
  