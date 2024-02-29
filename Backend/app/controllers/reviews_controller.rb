class ReviewsController < ApplicationController
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
    review = @review.as_json
    review['id'] = review['uuid']
    review.delete('uuid')
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/<uuid>
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/<uuid>
  def destroy
    @review.destroy!
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
