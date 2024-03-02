class Api::V1::ServicesController < ApplicationController
  before_action :set_service, only: %i[ show update destroy ]

  # GET /services
  def index
    @services = Service.all
    services_hash = @services.as_json
    services_hash.each do |service|
      service['id'] = service['uuid']
      service.delete('uuid')
    end
    render json: services_hash
  end

  # GET /services/<uuid>
  def show
    if @service
      service = @service.as_json
      service['id'] = service['uuid']
      service.delete('uuid')
      render json: service
    else
      render json: {error: 'Service not found'}, status: :not_found
    end
  end

  # POST /services
  def create
    @service = Service.new(service_params)
    if @service.save
      render json: @service, status: :created, location: api_v1_service_url(@service)
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /services/<uuid>
  def update
    if @service
      if @service.update(service_params)
        render json: @service
      else
        render json: @service.errors, status: :unprocessable_entity
      end
    else
      render json: {error: 'Service not found'}, status: :not_found
    end
  end

  # DELETE /services/<uuid>
  def destroy
    if @service
      @service.destroy!
    else
      render json: {error: 'Service not found'}, status: :not_found
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service
      @service = Service.find_by(uuid: params[:uuid])
    end

    # Only allow a list of trusted parameters through.
    def service_params
      params.require(:service).permit(:name, :price, :description, :availability, :service_category_id, :user_id)
    end
end
