class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: %i[ show update destroy ]

  # GET /reviews
  def index
    @reviews = Review.all
    reviews_hash = @reviews.as_json
    reviews_hash.each do |review|
      review['id'] = review['uuid']
      review.delete('uuid')
    end
    render json: reviews_hash
  end

  # GET /reviews/<uuid>
  def show
    if @review
      review = @review.as_json
      review['id'] = review['uuid']
      review.delete('uuid')
      render json: @review
    else
      render json: {error: 'Review not found'}, status: :not_found
    end
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review, status: :created, location: api_v1_review_url(@review)
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/<uuid>
  def update
    if @review
      if @review.update(review_params)
        render json: @review
      else
        render json: @review.errors, status: :unprocessable_entity
      end
    else
      render json: {error: 'Review not found'}, status: :not_found
    end
  end

  # DELETE /reviews/<uuid>
  def destroy
    if @review
      @review.destroy!
    else
      render json: {error: 'Review not found'}, status: :not_found
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find_by(uuid: params[:uuid])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:description, :service_id, :user_id)
    end
end
