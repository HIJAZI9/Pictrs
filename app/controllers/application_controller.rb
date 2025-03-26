class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  helper_method :current_user

  def authenticate_user!
    redirect_to login_url unless current_user
  end

  def current_user
    @user ||=
      begin
        return nil unless session[:user_id]
        User.find(session[:user_id])
      end
  end
end
