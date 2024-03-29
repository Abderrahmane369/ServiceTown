class Api::V1::ServiceCategoriesController < ApplicationController
  before_action :set_service_category, only: %i[ show update destroy ]


  # GET /service_categories/<uuid>/services
  def services_by_category
    @service_category = ServiceCategory.find_by(uuid: params[:uuid])
    if @service_category
      @services = @service_category.services
      render json: @services
    else
      render json: { error: 'Service Category not found' }, status: :not_found
    end
  end

  # GET /service_categories/<service_category_uuid>/services/<service_uuid>
  def service_by_category
    @service_category = ServiceCategory.find_by(uuid: params[:service_category_uuid])
    if @service_category
      @service = @service_category.services.find_by(uuid: params[:service_uuid])
      if @service
        render json: @service
      else
        render json: { error: 'Service not found' }, status: :not_found
      end
    else
      render json: { error: 'Service Category not found' }, status: :not_found
    end
  end

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


  # GET /service_categories/<uuid>
  def show
    if @service_category
      service_category = @service_category.as_json
      service_category['id'] = service_category['uuid']
      service_category.delete('uuid')
      render json: service_category
    else
      render json: {error: 'Service_category not found'}, status: :not_found
    end
  end

  # POST /service_categories
  def create
    @service_category = ServiceCategory.new(service_category_params)

    if @service_category.save
      render json: @service_category, status: :created, location: api_v1_service_category_url(@service_category)
    else
      render json: @service_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /service_categories/<uuid>
  def update
    if @service_category
      if @service_category.update(service_category_params)
        render json: @service_category
      else
        render json: @service_category.errors, status: :unprocessable_entity
      end
    else
      render json: {error: 'Service_category not found'}, status: :not_found
    end
  end

  # DELETE /service_categories/<uuid>
  def destroy
    if @service_category
      @service_category.destroy!
    else
      render json: {error: 'Service_category not found'}, status: :not_found
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service_category
      @service_category = ServiceCategory.find_by(uuid: params[:uuid])
    end

    # Only allow a list of trusted parameters through.
    def service_category_params
      params.require(:service_category).permit(:name, :description)
    end
end
