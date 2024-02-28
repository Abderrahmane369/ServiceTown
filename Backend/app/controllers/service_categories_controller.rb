class ServiceCategoriesController < ApplicationController
  before_action :set_service_category, only: %i[ show update destroy ]

  # GET /service_categories
  def index
    @service_categories = ServiceCategory.all
    categories_hash = @service_categories.as_json
    categories_hash.each do |category|
      category['id'] = category['uuid']
      category.delete('uuid')
    end
    render json: categories_hash
  end

  # GET /service_categories/1
  def show
    service_category = @service_category.as_json
    service_category['id'] = service_category['uuid']
    service_category.delete('uuid')
    render json: @service_category
  end

  # POST /service_categories
  def create
    @service_category = ServiceCategory.new(service_category_params)

    if @service_category.save
      render json: @service_category, status: :created, location: @service_category
    else
      render json: @service_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /service_categories/1
  def update
    if @service_category.update(service_category_params)
      render json: @service_category
    else
      render json: @service_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /service_categories/1
  def destroy
    @service_category.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service_category
      @service_category = ServiceCategory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def service_category_params
      params.require(:service_category).permit(:name, :description)
    end
end
